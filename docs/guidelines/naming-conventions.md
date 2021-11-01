# Basic rules

* Functions in page objects should be responsible for doing one thing
* Create a function in business objects if you need to perform more then 2 actions
* Use only business object funcitons in tests

# File Naming Conventions

File naming should use a combination Dot Case and camel case naming convention. Avoid using any other naming conventions
to keep the file structure across all projects consistent.

## dot case example:

> notes.po.ts

## DotCase with Camel Case Example:

The combination Dot Case/Camel Case comes into play when the name of the component is longer than a single word.

> caseList.po.ts

## Resource pattern related conventions:

* All business object files should end with '.bo.ts'

* All asssertion object files should end with '.as.ts'

* All page object files should end with '.po.ts'

* All helper function files should end with '.helper.ts'

* All test definitions should end with '.test.ts'

## Language CONCEPT!!!

Default language will be English

> Variable names should be the same as in front end in English
>
> `addMaterial` or `closeModal`

> Page File names should be the same as in web views
>
> `pageName.po.ts`

> Function names should be in English
>
> `validateStatus` or `openTab`

> Default actions like `get` or `set` should be in English

## Selector strategy

We follow the advised best practice of TestCafe,
- see [url](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/best-practices.html#selector-strategy)
- see [customData](https://sapui5.hana.ondemand.com/sdk/#/api/sap.ui.core.CustomData/methods/getKey)

> Create a custom data for every element used in Selector

> Use snippet:
> `<customData><core:CustomData key="testid" value="controlName-field" writeToDom="true" /></customData>`

> Selector in your page model should look like this `Selector('[data-testid=searchField-search')`

> In some controls (like icon or avatar) it's not allowed to create a custom data. In that case you have to add a prop to the control.

> Example: `id="controlName-field"`