import { useQuery, gql } from '@apollo/client'

import { GetUsersQuery, useGetUsersQuery, User } from './graphql/generated';



function UserList() {
  const { data, loading, error } = useGetUsersQuery();
  // const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p> Loading...</p>;
  if (error) return <p> Error :(</p>;

  const listOfUser = data ? (data?.users?.map((user) => <p key={user?.username}>{user?.username}</p>)) : null

 return (
  <div> {listOfUser}</div>
 )
  // return (<div>
  //   {
  //     if (data !== undefined) {
  //       data?.users?.map((user:User) => <p>{user.username}</p>)
  //     }
  //   }

  // )



  // return (<div>
  //   {
  //   if (data?.users !== null) {

  //     data?.users.map(({username})=> (
  //     <p key={username}>{username}</p>
  //     )
  //   )}</div>)


}
export default UserList;