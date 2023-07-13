const customMessage = (fieled: string)=>{
  return {
    "string.empty":`O campo ${fieled} é obrigatorio!`,
    "any.required":`O campo ${fieled} é obrigatorio!`,
  }
}

export {customMessage}