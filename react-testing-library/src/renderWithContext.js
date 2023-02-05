import { render } from "@testing-library/react";
import { BinaryClicksProvider } from "./BinaryClicksrovider";

export const renderWithContext = (elements, numberOfButtons) => {

    return render(
        <BinaryClicksProvider numberOfButtons={numberOfButtons}>
            {elements}
        </BinaryClicksProvider>
    );

}