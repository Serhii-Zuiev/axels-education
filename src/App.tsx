import React from "react";
import Paper from "@material-ui/core/Paper";
import { Column } from "@devexpress/dx-react-grid";
import {
    Grid,
    Table,
    TableHeaderRow,
    TableRowDetail,
    PagingPanel,
    Toolbar,
    SearchPanel,
} from "@devexpress/dx-react-grid-material-ui";
import {
    RowDetailState,
    PagingState,
    IntegratedPaging,
    SortingState,
    IntegratedSorting,
    SearchState,
    IntegratedFiltering,
    Sorting,
} from "@devexpress/dx-react-grid";

import { default as usersPlaceholer } from "./placeholder.json";

interface IRow {
    id: number;
    name: string;
    nickname: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

const RowDetail = (data: { row: IRow }) => (
    <>
        <p className="userDetailsHeading">
            Details for <b>{data.row.name}</b>
        </p>
        <div className="userDetailsContainer">
            <div className="userDetailsDetails">
                <i>Adress</i> <br />
                street: {data.row.address.street}
                <br />
                suite: {data.row.address.suite}
                <br />
                city: {data.row.address.city}
                <br />
                zipcode: {data.row.address.zipcode}
                <br />
                geo: {data.row.address.geo.lat} / {data.row.address.geo.lng}
                <br />
            </div>
            <div className="userDetailsDetails">
                <i>Company</i> <br />
                name: {data.row.company.name}
                <br />
                catchPhrase: {data.row.company.catchPhrase}
                <br />
                bs: {data.row.company.bs}
            </div>
            <img
                src="https://source.unsplash.com/400x300/?face"
                className="userDetailsPhoto"
                alt="face"
            />
        </div>
    </>
);

const rows: IRow[] = usersPlaceholer;
const columns: Column[] = [
    { name: "id", title: "ID" },
    { name: "name", title: "Name" },
    { name: "nickname", title: "Nickname" },
    { name: "email", title: "Email" },
    { name: "phone", title: "Phone" },
    { name: "website", title: "Website" },
];

const tableColumnExtensions: Table.ColumnExtension[] = [
    { columnName: "id", width: 70, align: "center" },
];

const defaultSorting: Sorting = { columnName: "id", direction: "asc" };

const Demo = () => {
    return (
        <Paper>
            <Grid rows={rows} columns={columns}>
                <RowDetailState />

                <SearchState />
                <IntegratedFiltering />

                <SortingState defaultSorting={[defaultSorting]} />
                <IntegratedSorting />

                <PagingState defaultCurrentPage={0} pageSize={5} />
                <IntegratedPaging />

                <Table columnExtensions={tableColumnExtensions} />
                
                <TableHeaderRow showSortingControls />
                <TableRowDetail contentComponent={RowDetail} />
                <PagingPanel />
                <Toolbar />
                <SearchPanel />
            </Grid>
        </Paper>
    );
};

export default Demo;
