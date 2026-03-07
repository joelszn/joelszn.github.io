"use client";

import { useState } from "react";
import { pressItems, typeLabels, type PressItem } from "@/data/press";
import PressDrawer from "@/components/PressDrawer";
import Icon from "@/components/Icon";

export default function PressSection() {
  const [selected, setSelected] = useState<PressItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {pressItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(item)}
            className="group rounded-lg border border-border bg-surface p-5 text-left transition-all hover:border-accent/50"
          >
            <p className="text-xs uppercase tracking-wider text-muted">
              {typeLabels[item.type]}
            </p>
            <p className="mt-2 font-medium text-foreground">
              {item.publication}
            </p>
            <p className="mt-1 text-sm text-muted">{item.title}</p>
            <p className="mt-4 inline-flex items-center gap-1 text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100">
              {item.type === "podcast" ? "Listen" : "Read more"}
              <Icon name="arrowRight" size={12} />
            </p>
          </button>
        ))}
      </div>

      <PressDrawer item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
