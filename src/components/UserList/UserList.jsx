import { Table } from 'react-bootstrap';

const UserList = ({ users }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th className="text-start">#</th>
          <th className="text-start">First name</th>
          <th className="text-start">Last name</th>
          <th className="text-start">Participation</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user, index) => (
          <tr key={index}>
            <td className="px-md-3">{user?.id}</td>
            <td className="px-md-3">{user?.name}</td>
            <td className="px-md-3">{user?.lastName}</td>
            <td className="px-md-3">{user?.participation?.percent}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserList;
