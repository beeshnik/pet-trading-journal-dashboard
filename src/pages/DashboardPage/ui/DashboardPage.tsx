import { TradeList } from "@entities/Trade";
import { TradeFilter } from "@widgets/TradeFilter";

export function DashboardPage() {
    return (
        <main>
            <TradeFilter />
            <TradeList />
        </main>
    );
}
