import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect } from 'react';
import "@fontsource/rubik"

import { createLocation} from "@graphql/mutations";
import { getLocation , listLocations} from "@graphql/queries";
import {API, Auth , currentUserInfo} from 'aws-amplify'
import Item from './singleItem';


export default function ItemList(props) {
    return (
      
      <div className="mostVisitedMain max-w-7xl m-auto" style={{fontFamily:'rubik',fontWeight:300}}>
        <div className="mostVisitedText">
            {props.title ?? "Name"}
        </div>
        <div className=" grid md:grid-cols-4 grid-cols-2 gap-6">
            {
              props.items.map((item, key)=><Item item={item} key={key}/>)
            }
        </div>
      </div>
    )
  }
  