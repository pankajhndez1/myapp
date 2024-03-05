// Higher-order component 1
const withPropRajaJii = (Component) => {
    return (props) => {
        return <Component {...props} text={"Raja jii"} />;
    };
};

// Higher-order component 2
const withAgeForty = (Component) => {
    return (props) => {
        return <Component {...props} age="40" />;
    };
};

const MyNewEnhanceComp = (Comp) => {
    const EnhancedComponent = withAgeForty(withPropRajaJii(Comp));
    return EnhancedComponent;
}

export default MyNewEnhanceComp;
