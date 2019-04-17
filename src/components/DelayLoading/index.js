import React from 'react'

const DelayLoading = ({ pastDelay, error }) => {
    console.log(pastDelay, error)
    if (pastDelay) {
        return <div style={{ textAlign: 'center', padding: '30px 50px', margin: '20px 0' }}>loading</div>
    } else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    } else {
        return null;
    }
}
export default DelayLoading
