# Try before you buy sample app

This is a mock-up of a tool that could be used by a DIY store to help customers decide on the best paint color to buy.

Customers can upload a photo of their room and select different colors to try out on their walls.

## Run the app

To run the app:

1. Clone or fork this GitHub repo.
1. In **src/config/cloudinary.ts**, replace **MY_CLOUD_NAME** with your Cloudinary product environment cloud name. You can find your **Cloud name** near the top of the Programmable Media [Dashboard](https://console.cloudinary.com/pm/developer-dashboard) of the Cloudinary Console. [Sign up for free](https://cloudinary.com/users/register_free) if you don't yet have a Cloudinary account.
1. Create an unsigned upload preset called **try-before-buy**. (You can use a different name, but if you do, you also need update the `uploadPreset` value in **cloudinary.ts**.) 
1. Run the development server:
   
    ```terminal
    npm i
    ```

    then

    ```terminal
    npm run dev
    ```
