import * as React from "react";

export interface IDictionary {
  [key: string]: string;
}

const initialStore = {
  dictionary: {
    "Read_More_Text": "Read More"
  }
}

export const Stores = React.createContext(initialStore);