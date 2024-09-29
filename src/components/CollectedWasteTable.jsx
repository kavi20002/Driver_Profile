import React, { useState } from 'react';
import { useAllCollectedWaste } from '../pages/CollectedWaste';
import { IoBuild, IoTrashSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function CollectedWasteTable() {
  const { data: waste, refetch } = useAllCollectedWaste();
  const [showConfirm, setShowConfirm] = useState({ visible: false, id: null });
  const [showWarning, setShowWarning] = useState(false); // For warning before deletion
  const [searchTerm, setSearchTerm] = useState('');

  const openComfirmModal = (id) => {
    setShowWarning(true);  // Show warning message first
    setShowConfirm({ visible: true, id });
  }

  const closeConfirmModal = () => {
    setShowWarning(false); // Hide warning message
    setShowConfirm({ visible: false, id: null });
  };

  const handleDelete = async (id) => {
    try {
      await customFetch.delete(`/waste/deleteWaste/${id}`);
      toast.success("Waste deleted successfully!");
      refetch();
    } catch (error) {
      toast.error("Failed to delete waste");
      console.error("Delete error", error);
    } finally {
      closeConfirmModal();
    }
  }

  const filteredData = waste.filter(w =>
    w.CustomerId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    w.CustomerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to export table to PDF
  const exportToPDF = () => {
    const input = document.getElementById('tableToExport');

    // Hide elements with 'no-print' class
    const noPrintElements = document.querySelectorAll('.no-print');
    noPrintElements.forEach(el => el.style.display = 'none');

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('collected_waste_table.pdf');

      // Show elements with 'no-print' class back after PDF generation
      noPrintElements.forEach(el => el.style.display = '');
    });
  };

  return (
    <div className="overflow-x-auto bg-white border border-gray-200">
      <div className="p-4">
        <input
          type="text"
          placeholder="Search by Customer ID or Customer Name"
          className="w-full px-4 py-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Add Export to PDF Button */}
      <div className="p-4">
        <button
          onClick={exportToPDF}
          className="px-4 py-2 text-white bg-green-500 rounded shadow-md hover:bg-green-600"
        >
          Export to PDF
        </button>
      </div>

      {/* Table to Export */}
      <table id="tableToExport" className="min-w-[1000px] w-full text-gray-700">
        <thead>
          <tr>
            <th>Customer Id</th>
            <th>Customer Name</th>
            <th>Price</th>
            <th>Weight</th>
            <th>Waste Category</th>
            <th>Collected Date</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((waste) => (
            <tr key={waste._id}>
              <td>{waste.CustomerId}</td>
              <td>{waste.CustomerName}</td>
              <td>{waste.Price}</td>
              <td>{waste.Weight}</td>
              <td>{waste.WasteCategory}</td>
              <td>{waste.CollectedDate}</td>
              <td>
                <div className="flex flex-row gap-1 no-print">
                  <Link to={`/DriverDashboard/edit-daily-waste/${waste._id}`}>
                    <button className="px-4 py-2 text-white bg-orange-500 rounded shadow-md hover:bg-orange-600">
                      <IoBuild />
                    </button>
                  </Link>
                  <button
                    className="px-4 py-2 text-white rounded shadow-md bg-red hover:bg-red"
                    onClick={() => openComfirmModal(waste._id)}
                  >
                    <IoTrashSharp />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {showConfirm.visible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded shadow-lg">
            {showWarning ? (
              <>
                <p className="mb-4 text-gray-700">
                  Do you want to keep a copy of this table as a PDF before deleting?
                </p>
                <div className="flex justify-between">
                  <button
                    onClick={exportToPDF}
                    className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                  >
                    Export to PDF
                  </button>
                  <button
                    onClick={() => setShowWarning(false)}
                    className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
                  >
                    Continue without PDF
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="mb-4 text-gray-700">
                  Are you sure you want to delete this waste?
                </p>
                <div className="flex justify-between">
                  <button
                    onClick={() => handleDelete(showConfirm.id)}
                    className="px-4 py-2 text-white rounded bg-red hover:bg-red"
                  >
                    Yes
                  </button>
                  <button
                    onClick={closeConfirmModal}
                    className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
                  >
                    No
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
