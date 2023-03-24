class FormFieldData {
  public erros: string[] = [];
  constructor(
    public value: string,
    public validations: Array<(value: string) => string>
  ) {}

  public validate() {
    this.erros = this.validations.map((func) => func(this.value)).filter(Boolean);
  }

  get isValid() {
    return this.erros.length === 0;
  }
}

export default FormFieldData;
