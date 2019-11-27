import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import { AgGridReact } from '@ag-grid-community/react';
import { AllCommunityModules } from '@ag-grid-community/all-modules';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-dark.css';

import root from './student';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      rowData: [],
      columnDefs: [
        { headerName: 'index', lockPosition: true, valueGetter:function(param){
                        return param.node.rowIndex}, cellClass: 'locked-col'},
        { headerName: "id", field: "id"},
        { headerName: "firstName", field: "firstName"},
        { headerName: "lastName", field: "lastName"}
      ]
    }

  }

  onGridReady = (params) => {
      this.api = params.api;
      this.columnApi = params.columnApi;
  }

  componentDidMount() {

    const Student = root.proto.StudentCollection;

    let options = {
      responseType: 'arraybuffer'
    };

    axios
      .get('http://localhost:8080/students/all', options)
      .then((response) => {
          let students = Student.decode(new Uint8Array(response.data)).students;
          this.setState({
            rowData: students
          })

      });
  }

  render() {
    return (
      <div className="ag-theme-dark" style={{ height: '500px', width: '800px' }}>
        <AgGridReact
          modules={AllCommunityModules}
          onGridReady={this.onGridReady}
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
        >
        </AgGridReact>
      </div>
    );
  }
}

export default App;
