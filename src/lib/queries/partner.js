export default function getQueryProgram(){
    return `
    query Program {
        websites {
            id
            titel
        }
    }`
}