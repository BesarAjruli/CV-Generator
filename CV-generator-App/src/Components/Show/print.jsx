const PrintDiv = (divToPrint) => {
    if (!divToPrint) {
      console.error('No content to print.');
      return;
    }
  
    // Open a new window and print the content
    const printWindow = window.open('', '', 'height=400,width=800');
    printWindow.document.write('<html><head><title>Print</title><link rel="stylesheet" type="text/css" href="src/index.css" /></head><body>');
    printWindow.document.write(divToPrint); // Insert the content of the div
    printWindow.document.write('</body></html>');
    printWindow.document.close(); // Close the document
    printWindow.print(); // Trigger the print dialog
  };
  
  export default PrintDiv;
  