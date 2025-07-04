import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function FormControls({ formControls = [], formData, setFormData }) {
  const renderComponentByType = (getControlItem) => {
    let element = null;
    const currentControlItemValue = formData[getControlItem.name] || "";
    switch (getControlItem.componentType) {
      case "input":
        element = (
          <Input
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
            value={currentControlItemValue}
            
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                [getControlItem.name]: e.target.value,
              }))
            }
          />
        );
        break;
      case "select":
        element = (
          <Select
            value={currentControlItemValue}
            onValueChange={(value) =>
              setFormData({
                ...formData,
                [getControlItem.name]: value,
              })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.label} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;
      case "textarea":
        element = (
          <Input
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
          />
        );
        break;
      case "checkbox":
        element = (
          <div className="flex items-center space-x-2">
            <Checkbox
              id={getControlItem.name}
              name={getControlItem.name}
              checked={formData[getControlItem.name] || false}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({
                  ...prev,
                  [getControlItem.name]: checked,
                }))
              }
            />
            <Label htmlFor={getControlItem.name}>{getControlItem.label}</Label>
          </div>
        );
        break;
      default:
        element = (
          <Input
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
            value={currentControlItemValue}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                [getControlItem.name]: e.target.value,
              }))
            }
          />
        );
        break;
    }
    return element;
  };
  return (
    <div className="flex flex-col gap-3">
      {formControls.map((controlItem) => (
        <div key={controlItem.name}>
          {controlItem.componentType !== "checkbox" && (
            <Label htmlFor={controlItem.name}>{controlItem.label}</Label>
          )}
          {renderComponentByType(controlItem)}
        </div>
      ))}
    </div>
  );
}

export default FormControls;
