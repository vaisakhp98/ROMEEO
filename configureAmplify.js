import Amplify,{Auth} from "aws-amplify";
import config from "./aws-exports"

Amplify.configure({config,ssr:true})
Auth.configure(config);