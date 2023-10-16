The repo contains the playwright certificate assignment in typescript to run give npx playwright test assignment.spec.ts.
To run it on lambda test it is compiled to javascript

i> playwright_Test_Scenario_1.ts 
 1. Open LambdaTest’s Selenium Playground from
https://www.lambdatest.com/selenium-playground
2. Click “Simple Form Demo” under Input Forms.
3. Validate that the URL contains “simple-form-demo”.
4. Create a variable for a string value E.g: “Welcome to LambdaTest”.
5. Use this variable to enter values in the “Enter Message” text box.
6. Click “Get Checked Value”.
7. Validate whether the same text message is displayed in the right-hand
panel under the “Your Message:” section.
 
 to run this code just give node playwright_Test_Scenario_1.js 

ii> playwright_Test_Scenario_2.ts 
1. Open the https://www.lambdatest.com/selenium-playground page and
click “Drag & Drop Sliders” under “Progress Bars & Sliders”.
2. Select the slider “Default value 15” and drag the bar to make it 95 by
validating whether the range value shows 95.

to run this code just give node playwright_Test_Scenario_2.js

iii> playwright_Test_Scenario_2.ts
1. Open the https://www.lambdatest.com/selenium-playground page and
click “Input Form Submit” under “Input Forms”.
2. Click “Submit” without filling in any information in the form.
3. Assert “Please fill in the fields” error message.
4. Fill in Name, Email, and other fields.
5. From the Country drop-down, select “United States” using the text
property.
6. Fill all fields and click “Submit”.
7. Once submitted, validate the success message “Thanks for contacting
us, we will get back to you shortly.” on the screen.

to run this code just give node playwright_Test_Scenario_3.js