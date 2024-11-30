import React from 'react'
import { useQuery } from 'react-query'
import { apiReq } from '@/services/axios/api/apiReq'

export default function useProducts() {

  const { data } = useQuery("Products" , apiReq.get("/products").then(res => console.log(res.data)).catch(err => console.log(err)))

  return data
}
