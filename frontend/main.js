window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {

    let count = 30;
    fetch(functionApi).then(Response => {
        return Response.json
    }).then(response => {
        console.log("Website called function API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}