// DocumentSubmissionForm.js
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Select, Text, Input } from '@chakra-ui/react';

function DocumentSubmissionForm() {
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    // Handle file selection and store it in the 'file' state.
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data for submission (e.g., selectedVendors, file)
    // Make an API request to the backend to submit the document.
    // Handle success and error responses from the server.
  };

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Document Submission
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="vendors">Select Vendors:</FormLabel>
          <Select
            id="vendors"
            name="vendors"
            multiple
            value={selectedVendors}
            onChange={(e) => setSelectedVendors(e.target.value)}
          >
            {/* Populate this dropdown with vendor data from the server */}
            <option value="vendor1">Vendor 1</option>
            <option value="vendor2">Vendor 2</option>
            {/* Add options dynamically based on available vendors */}
          </Select>
        </FormControl>
        <FormControl mt={4}>
          <FormLabel htmlFor="pdfFile">Upload PDF File:</FormLabel>
          <Input
            type="file"
            id="pdfFile"
            name="pdfFile"
            accept=".pdf"
            onChange={handleFileChange}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" mt={4}>
          Submit Document
        </Button>
      </form>
    </Box>
  );
}

export default DocumentSubmissionForm;
