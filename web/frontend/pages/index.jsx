import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";
import { useEffect } from "react";
import axios from "axios";
// import createApp from '@shopify/app-bridge';
// import {Redirect} from '@shopify/app-bridge/actions';

// const config = {
//   apiKey: "b20f83ca3fee942b693504a46a35e4ea",
//   host: new URLSearchParams(location.search).get("host"),
//   forceRedirect: true
// };

// const app = createApp(config);
// const redirect = Redirect.create(app);

export default function HomePage() {
  useEffect(async() => {
    console.log("hello world");
    // redirect.dispatch(Redirect.Action.REMOTE, 'https://app.blustream.io/');
    await axios.get(`https://one-click-signup-store.myshopify.com/admin/oauth/authorize?client_id=b20f83ca3fee942b693504a46a35e4ea&scope=read_orders,read_customers,read_products,read_checkouts&redirect_uri=https://8f72-171-50-244-157.in.ngrok.io&state=shopify&grant_options[]=per-user`,
    { headers: { "Access-Control-Allow-Origin": "one-click-signup-store.myshopify.com, 8f72-171-50-244-157.in.ngrok.io",'X-Requested-With': 'XMLHttpRequest', "Access-Control-Allow-Headers ":" Origin, Content-Type, X-Auth-Token" , 'Content-Type': 'multipart/form-data' } }).then((response) => console.log(response.json()))
    // 'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'
    console.log("request completed");
  }, [])

  // const hello = () => {
  //   console.log("hello world");
  //   redirect.dispatch(Redirect.Action.REMOTE, 'https://app.blustream.io/');
  // }
  
  return (
    <>
    {console.log("rendering")}
    {/* {hello()} */}
    {/* <h1>hello world</h1> */}
    </>
    // <Page narrowWidth>
    //   <TitleBar title="App name" primaryAction={null} />
    //   <Layout>
    //     <Layout.Section>
    //       <Card sectioned>
    //         <Stack
    //           wrap={false}
    //           spacing="extraTight"
    //           distribution="trailing"
    //           alignment="center"
    //         >
    //           <Stack.Item fill>
    //             <TextContainer spacing="loose">
    //               <Heading>Nice work on building a Shopify app 🎉</Heading>
    //               <p>
    //                 Your app is ready to explore! It contains everything you
    //                 need to get started including the{" "}
    //                 <Link url="https://polaris.shopify.com/" external>
    //                   Polaris design system
    //                 </Link>
    //                 ,{" "}
    //                 <Link url="https://shopify.dev/api/admin-graphql" external>
    //                   Shopify Admin API
    //                 </Link>
    //                 , and{" "}
    //                 <Link
    //                   url="https://shopify.dev/apps/tools/app-bridge"
    //                   external
    //                 >
    //                   App Bridge
    //                 </Link>{" "}
    //                 UI library and components.
    //               </p>
    //               <p>
    //                 Ready to go? Start populating your app with some sample
    //                 products to view and test in your store.{" "}
    //               </p>
    //               <p>
    //                 Learn more about building out your app in{" "}
    //                 <Link
    //                   url="https://shopify.dev/apps/getting-started/add-functionality"
    //                   external
    //                 >
    //                   this Shopify tutorial
    //                 </Link>{" "}
    //                 📚{" "}
    //               </p>
    //             </TextContainer>
    //           </Stack.Item>
    //           <Stack.Item>
    //             <div style={{ padding: "0 20px" }}>
    //               <Image
    //                 source={trophyImage}
    //                 alt="Nice work on building a Shopify app"
    //                 width={120}
    //               />
    //             </div>
    //           </Stack.Item>
    //         </Stack>
    //       </Card>
    //     </Layout.Section>
    //     <Layout.Section>
    //       <ProductsCard />
    //     </Layout.Section>
    //   </Layout>
    // </Page>
  );
}
