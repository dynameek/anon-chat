/*  */
export class Chat {
  addMessage(parentId, message, isMine = false) {
    let parent = document.getElementById(parentId);
    let msgElement = document.createElement('div');

    let classes = isMine ? 'message msg-to' : 'message';
    msgElement.setAttribute('ngClass', classes);
    msgElement.innerHTML = message;

    parent.appendChild(msgElement);
  }
}
