import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ObjCard from '../Categories/Cards/ObjCard';
import './SpecialCategories.css'


function SpecialCategories({bigObj}) {

    let numOfArrays = bigObj.names.length;

    let tabs = bigObj.names.map(el => {
        return <Tab>{el}</Tab>
    }) 

    let arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = [], arr7 = [];

    if(bigObj.arr1 != undefined && bigObj.arr1.length > 0) {
        arr1 = bigObj.arr1.map(el => {
            return <ObjCard item={el} />
        })
    }
    if(bigObj.arr2 != undefined && bigObj.arr2.length > 0) {
        arr2 = bigObj.arr2.map(el => {
            return <ObjCard item={el}  />
        })
    }
    if(bigObj.arr3 != undefined && bigObj.arr3.length > 0) {
        arr3 = bigObj.arr3.map(el => {
            return <ObjCard item={el}  />
        })
    }
    if(bigObj.arr4 != undefined && bigObj.arr4.length > 0) {
        arr4 = bigObj.arr4.map(el => {
            return <ObjCard item={el}  />
        })
    }
    if(bigObj.arr5 != undefined && bigObj.arr5.length > 0) {
        arr5 = bigObj.arr5.map(el => {
            return <ObjCard item={el}  />
        })
    }
    if(bigObj.arr6 != undefined && bigObj.arr6.length > 0) {
        arr6 = bigObj.arr6.map(el => {
            return <ObjCard item={el}  />
        })
    }
    if(bigObj.arr7 != undefined && bigObj.arr7.length > 0) {
        arr7 = bigObj.arr7.map(el => {
            return <ObjCard item={el}  />
        })
    }


    let bigArray = [arr1, arr2, arr3, arr4, arr5, arr6, arr7]

    let panels = bigObj.names.map((element, index) => {
        return <TabPanel>       
               {bigArray[index].length > 0 ? bigArray[index] : "" } 
            </TabPanel>
    })
    return <Tabs className="font">
            <TabList>
                {tabs}
            </TabList>

           {panels}
            </Tabs>
}

export default SpecialCategories;
