const AddBgToAllThePages = Comp => {
    console.log(Comp, '<====Comp');
    return (
        function HocComp() {
            return (
                <div>
                    <Comp permissions={"permissons"} classNames="bg-gray-200" />
                </div>
            )
        }
    )
}
export default AddBgToAllThePages;