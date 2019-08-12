# ReponsiveDataTable

This is a simple table in react that allows JSON data to be searched and filtered.

# Typical usage 
 ```
 import Summaries from '../components/JSONTables/summarytable'

const IndexPage = () => (
  <PageBody >
   
   <div style={{maxWidth:`900px`,width:`100%`}}>
   <Summaries isLoading = {false} tableData={sampleData}/>
   </div>
 
  </PageBody>
)
```

# Props 

isLoading : This is a boolean that controls whether or not the little loading indicator shows up. 

tableData : This is the actual data that is meant to be displayed to be the user. 

# Features

Date can sorted by key and in reverse. It can also be sorted and filtered at the same time. It automatically applied those
filters to new data that comes in. 

