import { Check } from "lucide-react";
import { Badge } from "./ui/badge";
import { checkPassword, cn } from "@/lib/utils";

interface ValidationBadge {
  isValid: boolean;
  children: React.ReactNode;
}

const ValidationBadge = ({ isValid, children }: ValidationBadge) => {
  const variant = isValid ? "success" : "secondary";

  return (
    <Badge variant={variant} className="w-fit space-x-1">
      {isValid && <Check size={"16px"} />}
      <span>{children}</span>
    </Badge>
  );
};

export const PasswordValidation = ({ password }: { password: string }) => {
  const { isMinSixChar, hasOneLowerChar, hasOneSpecialChar, hasOneUpperChar } =
    checkPassword(password);

  const validationCriteria = [
    {
      isValid: isMinSixChar,
      text: "Min 6 characters",
    },
    {
      isValid: hasOneUpperChar,
      text: "1 uppercase letter",
    },
    {
      isValid: hasOneLowerChar,
      text: "1 lowercase letter",
    },
    {
      isValid: hasOneSpecialChar,
      text: "1 special letter",
    },
  ];

  return (
    <div
      className={cn("flex-wrap gap-2", password.length > 0 ? "flex" : "hidden")}
    >
      {validationCriteria.map((criteria, index) => (
        <ValidationBadge key={index} isValid={criteria.isValid}>
          {criteria.text}
        </ValidationBadge>
      ))}
    </div>
  );
};
