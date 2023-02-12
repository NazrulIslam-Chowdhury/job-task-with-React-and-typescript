import React,
{
    FormEvent,
    useState
} from 'react';
import {
    TextField,
    Card,
    CardContent,
    Button
} from '@mui/material'
import { useNavigate } from 'react-router-dom';



interface IState {
    user: {
        Name: string,
        Email: string,
        Phone: string
    }
}

const UserInfo = () => {
    const [user, setUser] = useState<IState>({
        user: {
            Name: "",
            Email: "",
            Phone: ""
        }
    });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            user: {
                ...user.user,
                [e.target.name]: e.target.value
            }
        })
    }

    // form submit and add data to local storage
    const submit = (e: FormEvent) => {
        e.preventDefault();
        const userInfo = user.user;
        if (userInfo.Name === "" || userInfo.Email === "" || userInfo.Phone === "") {
            return alert('Please give information first');
        }
        localStorage.setItem("User", JSON.stringify(userInfo))
        navigate('/data');
    }

    return (
        <div>
            <h1 style={{
                color: 'black',
                textAlign: 'center'
            }}>
                Give Information
            </h1>
            <div style={{
                display: "flex",
                justifyContent: 'center',
                marginTop: '50px',
                padding: '50px'
            }}>
                <Card>
                    <CardContent>
                        <form onSubmit={submit}>
                            <TextField
                                id="name"
                                name='Name'
                                value={user.user.Name}
                                onChange={handleChange}
                                label="Name"
                                color='success'
                                variant='outlined'
                                placeholder='name'
                                sx={{ marginTop: '10px' }}
                                fullWidth
                                required
                            />
                            <TextField
                                id="email"
                                name='Email'
                                value={user.user.Email}
                                onChange={handleChange}
                                label="Email"
                                color='success'
                                type='email'
                                variant='outlined'
                                placeholder='Email'
                                sx={{ marginTop: '10px' }}
                                fullWidth
                                required
                            />
                            <TextField
                                id="phone"
                                name='Phone'
                                value={user.user.Phone}
                                onChange={handleChange}
                                label="Phone Number"
                                type='number'
                                color='success'
                                variant='outlined'
                                placeholder='Phone Number'
                                sx={{ marginTop: '10px' }}
                                fullWidth
                                required
                            />
                            <Button
                                type='submit'
                                variant='contained'
                                color='primary'
                                sx={{
                                    marginTop: '10px',
                                    boxShadow: '2px 2px 2px 2px black'
                                }}
                            >
                                Save
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default UserInfo;