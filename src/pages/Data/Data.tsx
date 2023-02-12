import { DataGrid } from '@mui/x-data-grid';
import React,
{
    useEffect,
    useState
} from 'react';
import { DataComments } from '../../Data Fetch/DataFetch';
import { columns } from '../../Data Grid/DataGrid';
import { IUsers } from '../../Models/IComments';

interface IState {
    loading: boolean,
    users: IUsers[],
    errorMsg: string
}

const Data = () => {
    const [state, setState] = useState<IState>({
        loading: false,
        users: [] as IUsers[],
        errorMsg: ''
    })

    //URL request
    useEffect(() => {
        setState({ ...state, loading: true })
        DataComments.getComments()
            .then(res => setState({
                ...state,
                users: res.data,
                loading: false,
            }))
            .catch(err => setState({
                ...state,
                loading: false,
                errorMsg: err.message
            }));
    }, [])
    const { loading, users, errorMsg } = state;
    console.log(users)

    // data grid row
    const rows = users.map((user, i) => ({
        id: i + 1,
        ID: user.id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        city: user.address.city,
        street: user.address.street,
        suit: user.address.suite,
        website: user.website,
        company: user.company.name,
    }))
    return (
        <div>
            <h1 style={{
                color: 'black',
                textAlign: 'center'
            }}>Users Data</h1>
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