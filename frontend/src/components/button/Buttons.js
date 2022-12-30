import { Button } from "react-bootstrap"

export const DefaultBtn = ({title}) => {
    return (
        <Button className="DefaultBtn">{title}</Button>
    )
}

export const PrimaryBtn = ({title}) => {
    return (
        <Button className="PrymaryBtn">{title}</Button>
    )
}

export const SecondPrimaryBtn = ({title}) => {
    return (
        <Button className="SecondPrimaryBtn rounded-pill px-4 py-2 fw-bold my-2">{title}</Button>
    )
}

export const SecondPrimaryFillBtn = ({title}) => {
    return (
        <Button className="SecondPrimaryFillBtn">
            {title}
        </Button>
    )
}