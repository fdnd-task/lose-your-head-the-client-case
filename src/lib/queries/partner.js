export default function getQueryPartner(gql){
    return gql`
    query Program {
        websites(orderBy: titel_ASC) {
          id
          titel
          homepage
        }
      }`
}