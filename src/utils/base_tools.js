export const copyToClipboard = (text) => {
    let input = document.createElement("input");
    input.value = text;
    input.style = 'positions: absolute';
    document.body.appendChild(input);
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text)
        .catch(text => {
            console.error('Не удалось скопировать: ' + text);
        })
    input.remove();
}