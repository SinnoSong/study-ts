function formatInput(input: string) {
  // ...
}
function getUserInput(): string | number {
  // ...
  return "";
}

let input = getUserInput();
formatInput(input as string);
formatInput(<string>input);

type Dialog = {
  id?: string;
};

function closeDialog(dialog: Dialog) {
  if (!dialog.id) {
    return;
  }
  setTimeout(() => removeFromDOM(dialog, document.getElementById(dialog.id!)!));
}

function removeFromDOM(dialog: Dialog, element: Element) {
  element.parentElement!.removeChild(element);
  delete dialog.id;
}

type VisibleDialog = { id: string };
type DestroyedDialog = {};
type Dialog1 = VisibleDialog | DestroyedDialog;

function closeDialog1(dialog: Dialog1) {
  if (!("id" in dialog)) {
    return;
  }
  setTimeout(() => removeFromDOM(dialog, document.getElementById(dialog.id)!));
}
export {};
