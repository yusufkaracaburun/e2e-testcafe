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
        .expect(selector.value).contains(value)
  }

}

export default new SelectorUtils();
