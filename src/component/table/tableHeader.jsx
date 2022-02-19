import React from "react";

const TableHeader = () => {
    return ( 
        <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">userId</th>
                <th scope="col">title</th>
                <th scope="col">delete</th>
                <th scope="col">update</th>
            </tr>
        </thead>
    );
}
 
export default TableHeader;