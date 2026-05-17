import { FadeLoader } from "react-spinners";

function Spinners({ loading }) {
    const override = {
        display: "block",
        margin: "0 auto",
    };

    return (
        <FadeLoader
            color="gray"
            loading={loading}
            cssOverride={override}
            size={150}
        />
    )
}

export default Spinners