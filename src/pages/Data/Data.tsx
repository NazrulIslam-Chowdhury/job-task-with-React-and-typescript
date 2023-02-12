import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { DataComments } from '../../Data Fetch/DataFetch';
import { IComments } from '../../Models/IComments';

interface IState {
    loading: boolean,
    comments: IComments[],
    errorMsg: string
}

const Data = () => {
    const [state, setState] = useState<IState>({
        loading: false,
        comments: [] as IComments[],
        errorMsg: ''
    })

    // request
    useEffect(() => {
        setState({ ...state, loading: true })
        DataComments.getComments()
            .then(res => setState({
                ...state,
                loading: false,
                comments: res.data.slice(0, 100)
            }))
            .catch(err => setState({
                ...state,
                loading: false,
                errorMsg: err.message
            }));
    }, [])
    const { loading, comments, errorMsg } = state;
    console.log(comments)

    // data grid
    const columns = [
        { field: 'PostID', headerName: 'PostID', width: 70 },
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 220 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'body', headerName: 'Comments', width: 300 },
    ];

    const rows = comments.map((comment) => ({
        postID: comment.postId,
        id: comment.id,
        name: comment.name,
        email: comment.email,
        comments: comment.body
    }))
    return (
        <div>
            <h1 style={{
                color: 'black',
                textAlign: 'center'
            }}>Data Grid</h1>
            {loading && (<p>Loading...</p>)}
            {errorMsg && (<p>{errorMsg}</p>)}
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
        </div>
    );
};

export default Data;