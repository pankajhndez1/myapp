const AddBgToAllThePages = Comp => {
    console.log(Comp, '<====Comp');
    return (
        function HocComp(props) {
            return (
                <div>
                    <Comp permissions={"permissons"} classNames="bg-gray-200" {...props}
                    />
                </div>
            )
        }
    )
}
export default AddBgToAllThePages;