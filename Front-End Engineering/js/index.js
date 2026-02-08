const word = document.querySelector('#word');
const description = document.querySelector('#description');
const useCase = document.querySelector('#useCase');

async function getData() {
  const url = "https://697fc9aa6570ee87d50d8f04.mockapi.io/ask";
  try {
    const response = await fetch(url);

    if (!response.ok) {
        fillData("Error", getErrorDescription(), getErrorUseCase());
        throw new Error(`Response status: ${response.status}`);
    }

    const list = await response.json();
    const result = list[Math.floor(Math.random() * list.length)];

    fillData(result.word, result.description, result.useCase);

  } catch (error) {
    console.error(error.message);
  }
}

function fillData(txtWord, txtDescription, txtUseCase){
    word.innerHTML = `Word: ${txtWord}`
    description.innerHTML = `Description: ${txtDescription}`
    useCase.innerHTML = `Use case: ${txtUseCase}`
}

function getErrorDescription(){
    return "Failed to query the requested service. The operation could not be completed due to a temporary unavailability or a communication error.";
}

function getErrorUseCase(){
    return "The word lookup system encountered an error, possibly due to a missing access token or a system failure during the processing of your request.";
}