import { Icon } from "@stellar/design-system";

export default function EmployeeEntry() {
    return (
        <div className="flex-1 flex flex-col items-center justify-start p-12 max-w-6xl mx-auto w-full">
            <div className="w-full mb-12 flex items-end justify-between border-b border-hi pb-8">
                <div>
                    <h1 className="text-4xl font-black mb-2 tracking-tight">Workforce <span className="text-accent">Directory</span></h1>
                    <p className="text-muted font-mono text-sm tracking-wider uppercase">Employee roster and compliance</p>
                </div>
                <button className="px-5 py-2.5 bg-accent text-bg font-bold rounded-lg hover:bg-accent/90 transition-all flex items-center gap-2 text-sm shadow-lg shadow-accent/10">
                    <Icon.Plus size="sm" />
                    Add Employee
                </button>
            </div>

            <div className="w-full card glass noise overflow-hidden p-0">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-hi">
                            <th className="p-6 text-xs font-bold uppercase tracking-widest text-muted">Employee</th>
                            <th className="p-6 text-xs font-bold uppercase tracking-widest text-muted">Role</th>
                            <th className="p-6 text-xs font-bold uppercase tracking-widest text-muted">Wallet Address</th>
                            <th className="p-6 text-xs font-bold uppercase tracking-widest text-muted">Status</th>
                            <th className="p-6 text-xs font-bold uppercase tracking-widest text-muted">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {/* Placeholder row */}
                        <tr className="hover:bg-white/5 transition-colors">
                            <td className="p-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-surface-hi flex items-center justify-center border border-hi font-bold text-accent">W</div>
                                    <div>
                                        <div className="font-bold">Wilfred G.</div>
                                        <div className="text-xs text-muted">wilfred@example.com</div>
                                    </div>
                                </div>
                            </td>
                            <td className="p-6 text-sm font-medium">Lead Developer</td>
                            <td className="p-6 font-mono text-xs text-muted">GD6F...4R2T</td>
                            <td className="p-6">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success/10 text-success text-[10px] font-bold uppercase tracking-wider border border-success/20">
                                    <div className="w-1 h-1 rounded-full bg-success" />
                                    Active
                                </span>
                            </td>
                            <td className="p-6">
                                <button className="text-muted hover:text-text transition-colors">
                                    <Icon.Settings01 size="sm" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="p-12 flex flex-col items-center justify-center text-center bg-black/10">
                    <p className="text-muted mb-4 font-medium">Need to migrate your legacy payroll system?</p>
                    <button className="text-accent font-bold text-sm hover:underline">Import from CSV (Coming Soon)</button>
                </div>
            </div>
        </div>
    );
}
