import React from "react";
import { Input, Select, Button } from "antd";

const { Option } = Select;

const FilterDetails = ({ onClose }) => {
  return (
    <div>
      <div className="filter_data">
        <div className="filter_data_head">
          <Button onClick={onClose}>Close</Button>
        </div>
        <div className="filter_data_info">
          <Select defaultValue="property Selection">
            <Option value="Bed Room">Bed Room</Option>
            <Option value="Living Room">Living Room</Option>
            <Option value="Hall">Hall</Option>
          </Select>
          <Select defaultValue="Type Of Building">
            <Option value="1">House</Option>
            <Option value="2">Apartmennt</Option>
            <Option value="3">Duplex</Option>
            <Option value="4">Villah</Option>
          </Select>
        </div>
        <div className="filter_data_info">
          <Input placeholder="Enter Breadth" />
          <Input placeholder="Enter Length" />
        </div>
        <div className="filter_data_info">
          <Select defaultValue="No Of Storeys" style={{ width: 120 }}>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
            <Option value="6">6</Option>
          </Select>
          <Input placeholder="Enter BuiltUp Area" />
        </div>
      </div>
    </div>
  );
};

export default FilterDetails;
