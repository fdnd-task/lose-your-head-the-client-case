export default function getQueryWebsite(slug){
    return `query Website {
        website(where: {id: "${slug}"}) {
          titel
          urls {
            url
          }
        }
      }`
}