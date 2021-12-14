import {Selector, t} from "testcafe";

class SelectorUtils{

  /*
  For more info or how to use typeText, please visit:
  https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/typetext.html
  */
  async typeText(selector: Selector, value: any, paste: boolean = true){
    const options = {paste:paste, replace: true};
    await t
        .expect(selector.exists).ok()
        .typeText(selector, value, options)
        .expect(selector.value).contains(value);
  }

  async typeTextAndEnter(selector: Selector, value: any, paste: boolean = true){
    const options = {paste:paste, replace: true};
    await t
        .expect(selector.exists).ok()
        .typeText(selector, value, options)
        .expect(selector.value).contains(value)
        .pressKey('enter');
  }

  async uploadFiles(uploadSelector: Selector, uploadedFilesSelector: Selector, files: Array<string>) {
    await t
        .setFilesToUpload(uploadSelector.find('input').withAttribute('type','file'), files)
        .expect(uploadedFilesSelector.count).eql(files.length)
    for (const index in files)
      await t.expect(uploadedFilesSelector.nth(Number(index)).textContent).contains(files[index].split('/').pop())
  }

}

export default new SelectorUtils();
