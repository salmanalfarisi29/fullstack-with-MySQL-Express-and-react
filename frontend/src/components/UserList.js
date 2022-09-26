import React from 'react'

const UserList = () => {
  return (
    <div className='columns mt-5 is-centered'>
        <div className='column is-half'></div>
        <table className='table is-stripped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <body>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </body>
        </table>
    </div>
  );
};

export default UserList;