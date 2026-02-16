"use client";

import { type FlagCode } from "../../lib/flags";
import { useFlag } from "../../hooks/useFlag";

export type FlagProps = React.SVGProps<SVGSVGElement> & {
  code: FlagCode;
};

export function Flag({ code, ...props }: FlagProps) {
  const FlagSvg = useFlag(code);
  return <FlagSvg {...props} />;
}
