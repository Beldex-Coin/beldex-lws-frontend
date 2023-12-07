import { useState } from "react";
import "./styles.scss";
import { Box, Button, SvgIcon, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import EmptyTransactions from '../../../icons/EmptyTransactionsDark';

export default function TransactionList(props: any) {
  const transactions = props?.transactions?.length ? props?.transactions : [];
  const beldex_amount_format_utils = require("@bdxi/beldex-money-format");
  console.log("transactions ::", transactions);

  const dateString = (dateVal: any) => {
    const date = new Date(dateVal);
    return date
      .toLocaleDateString("en-US" /* for now */, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
      .toUpperCase();
  };
  return (
    <Box className="transactionList">
      {transactions.length ? (
        transactions.map((transaction: any, index: number) => (
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
            pb={2}
            key={index}
            sx={{
              borderBottom: "0.5px solid #8787A8",
            }}
            onClick={() => props.setTransactionDetails([transaction])}
          >
            <Box>
              <Typography
                sx={{
                  color:
                    transaction.approx_float_amount < 0 ? "#FC2727" : "#20D030",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                }}
              >
                {beldex_amount_format_utils.formatMoney(transaction.amount)} BDX
                {/* {transaction.total_received/1e9} BDX */}
              </Typography>
              <Typography sx={{ color: "#D1D1D3", fontSize: "0.8rem" }}>
                {transaction.payment_id}
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Box mr={2}>
                <Typography sx={{ fontSize: "0.8rem" }}>
                  {dateString(transaction.timestamp)}
                </Typography>
                <Typography
                  textAlign={"end"}
                  sx={{ color: "#8787A8", fontSize: "14px" }}
                >
                  {transaction.isConfirmed ? "Confirmed" : "Pending"}
                </Typography>
              </Box>
              <ArrowRightIcon sx={{ fill: "#8787A8", fontSize: "2rem" }} />
            </Box>
          </Box>
        ))
      ) :
        (
          <Box display="flex" alignItems="center" justifyItems="center" width='100%' height='400px' sx={{}}>
            <Box display='flex' alignItems='center' alignContent='center' justifyContent='center' flexDirection="column" width="400px" height="300px" margin="auto" sx={{ border: '2px solid #454556', borderRadius: '8px' }}>
              <Box>
                <svg width="98" height="106" viewBox="0 0 98 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 105.409V17.528C1.00027 13.1446 2.74169 8.94078 5.84123 5.84123C8.94078 2.74169 13.1446 1.00027 17.528 1H80.253C84.6366 1 88.8407 2.74131 91.9404 5.84088C95.0402 8.94045 96.7817 13.1444 96.782 17.528V105.409" fill="#3A3A4B" />
                  <path d="M1 105.409V17.528C1.00027 13.1446 2.74169 8.94078 5.84123 5.84123C8.94078 2.74169 13.1446 1.00027 17.528 1H80.253C84.6366 1 88.8407 2.74131 91.9404 5.84088C95.0402 8.94045 96.7817 13.1444 96.782 17.528V105.409" stroke="#65656E" stroke-miterlimit="10" />
                  <path d="M83.9539 25.978H14.9529C13.1536 25.978 11.6949 27.4367 11.6949 29.236V42.55C11.6949 44.3494 13.1536 45.808 14.9529 45.808H83.9539C85.7533 45.808 87.2119 44.3494 87.2119 42.55V29.236C87.2119 27.4367 85.7533 25.978 83.9539 25.978Z" stroke="#65656E" stroke-width="1.03" stroke-miterlimit="10" />
                  <path d="M83.9539 52.4771H14.9529C13.1536 52.4771 11.6949 53.9357 11.6949 55.7351V69.0491C11.6949 70.8484 13.1536 72.3071 14.9529 72.3071H83.9539C85.7533 72.3071 87.2119 70.8484 87.2119 69.0491V55.7351C87.2119 53.9357 85.7533 52.4771 83.9539 52.4771Z" stroke="#65656E" stroke-width="1.03" stroke-miterlimit="10" />
                  <path d="M83.9539 78.9761H14.9529C13.1536 78.9761 11.6949 80.4347 11.6949 82.2341V95.5481C11.6949 97.3474 13.1536 98.8061 14.9529 98.8061H83.9539C85.7533 98.8061 87.2119 97.3474 87.2119 95.5481V82.2341C87.2119 80.4347 85.7533 78.9761 83.9539 78.9761Z" stroke="#65656E" stroke-width="1.03" stroke-miterlimit="10" />
                  <path d="M32.033 35.8931H69.59" stroke="#65656E" stroke-width="1.03" stroke-miterlimit="10" stroke-linecap="round" />
                  <path d="M32.033 88.8911H69.59" stroke="#65656E" stroke-width="1.03" stroke-miterlimit="10" stroke-linecap="round" />
                  <path d="M41.5391 14.3511H59.8841" stroke="#65656E" stroke-miterlimit="10" stroke-linecap="round" />
                  <path d="M32.033 63.3311H69.59" stroke="#65656E" stroke-width="1.03" stroke-miterlimit="10" stroke-linecap="round" />
                  <path d="M25.735 36.9132C25.735 37.0557 25.7916 37.1922 25.8923 37.293C25.993 37.3937 26.1296 37.4502 26.272 37.4502C26.4145 37.4502 26.551 37.3937 26.6518 37.293C26.7525 37.1922 26.809 37.0557 26.809 36.9132V33.1522C26.8092 33.117 26.8062 33.0819 26.8 33.0472C26.7963 33.0316 26.7916 33.0163 26.786 33.0012L26.769 32.9472C26.7612 32.9294 26.7519 32.9124 26.741 32.8962C26.735 32.8816 26.7276 32.8676 26.719 32.8542C26.6796 32.7953 26.629 32.7447 26.57 32.7052C26.5572 32.697 26.5438 32.6897 26.53 32.6832C26.5132 32.6724 26.4955 32.663 26.477 32.6552C26.4596 32.648 26.4415 32.6423 26.423 32.6382C26.408 32.6382 26.392 32.6272 26.377 32.6242C26.3424 32.6181 26.3072 32.6151 26.272 32.6152H22.511C22.3686 32.6152 22.232 32.6718 22.1313 32.7725C22.0306 32.8732 21.974 33.0098 21.974 33.1522C21.974 33.2947 22.0306 33.4312 22.1313 33.532C22.232 33.6327 22.3686 33.6892 22.511 33.6892H24.975L20.313 38.6482C20.2123 38.749 20.1556 38.8857 20.1556 39.0282C20.1556 39.1708 20.2123 39.3075 20.313 39.4082C20.4138 39.509 20.5505 39.5656 20.693 39.5656C20.8356 39.5656 20.9723 39.509 21.073 39.4082L25.735 34.4492V36.9132Z" fill="#65656E" />
                  <path d="M25.735 89.713C25.735 89.8554 25.7916 89.992 25.8923 90.0927C25.993 90.1934 26.1296 90.25 26.272 90.25C26.4145 90.25 26.551 90.1934 26.6518 90.0927C26.7525 89.992 26.809 89.8554 26.809 89.713V85.953C26.8092 85.9178 26.8062 85.8827 26.8 85.848C26.7963 85.8324 26.7916 85.8171 26.786 85.802L26.769 85.748C26.7612 85.7302 26.7519 85.7132 26.741 85.697C26.735 85.6824 26.7276 85.6683 26.719 85.655C26.6796 85.5961 26.629 85.5455 26.57 85.506C26.5572 85.4978 26.5438 85.4905 26.53 85.484C26.5132 85.4732 26.4955 85.4638 26.477 85.456C26.4596 85.4487 26.4415 85.4431 26.423 85.439C26.408 85.439 26.392 85.428 26.377 85.425C26.3424 85.4189 26.3072 85.4159 26.272 85.416H22.511C22.3686 85.416 22.232 85.4726 22.1313 85.5733C22.0306 85.674 21.974 85.8106 21.974 85.953C21.974 86.0954 22.0306 86.232 22.1313 86.3327C22.232 86.4334 22.3686 86.49 22.511 86.49H24.975L20.313 91.449C20.2631 91.4989 20.2236 91.5582 20.1965 91.6234C20.1695 91.6886 20.1556 91.7584 20.1556 91.829C20.1556 91.8996 20.1695 91.9695 20.1965 92.0347C20.2236 92.0999 20.2631 92.1591 20.313 92.209C20.3629 92.2589 20.4222 92.2985 20.4874 92.3255C20.5526 92.3525 20.6225 92.3664 20.693 92.3664C20.7636 92.3664 20.8335 92.3525 20.8987 92.3255C20.9639 92.2985 21.0231 92.2589 21.073 92.209L25.735 87.25V89.713Z" fill="#65656E" />
                  <path d="M21.231 62.5079C21.231 62.3655 21.1744 62.2289 21.0737 62.1282C20.973 62.0275 20.8364 61.9709 20.694 61.9709C20.5516 61.9709 20.415 62.0275 20.3143 62.1282C20.2136 62.2289 20.157 62.3655 20.157 62.5079V66.2659C20.1569 66.3011 20.1599 66.3363 20.166 66.3709C20.1697 66.3865 20.1744 66.4019 20.18 66.4169L20.197 66.4709C20.2048 66.4887 20.2142 66.5058 20.225 66.5219C20.2311 66.5366 20.2384 66.5506 20.247 66.5639C20.2864 66.6229 20.3371 66.6735 20.396 66.7129C20.4088 66.7211 20.4222 66.7285 20.436 66.7349C20.4528 66.7458 20.4705 66.7552 20.489 66.7629C20.5064 66.7702 20.5245 66.7759 20.543 66.7799C20.558 66.7799 20.574 66.7909 20.589 66.7939C20.6237 66.8001 20.6588 66.8031 20.694 66.8029H24.455C24.5974 66.8029 24.734 66.7464 24.8347 66.6457C24.9354 66.5449 24.992 66.4084 24.992 66.2659C24.992 66.1235 24.9354 65.9869 24.8347 65.8862C24.734 65.7855 24.5974 65.7289 24.455 65.7289H21.991L26.653 60.7699C26.7029 60.72 26.7425 60.6608 26.7695 60.5956C26.7965 60.5304 26.8104 60.4605 26.8104 60.3899C26.8104 60.3194 26.7965 60.2495 26.7695 60.1843C26.7425 60.1191 26.7029 60.0598 26.653 60.0099C26.6031 59.96 26.5438 59.9205 26.4786 59.8934C26.4134 59.8664 26.3436 59.8525 26.273 59.8525C26.2024 59.8525 26.1325 59.8664 26.0673 59.8934C26.0021 59.9205 25.9429 59.96 25.893 60.0099L21.231 64.9689V62.5079Z" fill="#65656E" />
                </svg>
              </Box>
              {/* <EmptyTransactions /> */}
              <Typography mt={0.8} sx={{ fontWeight: '600' }}>No Transactions yet!</Typography>
              <Typography mt={1} sx={{ color: '#82828D', fontSize: '12px' }}>After your first transaction,</Typography>
              <Typography sx={{ color: '#82828D', fontSize: '12px' }}>you will be able to view it here.,</Typography>
            </Box>
          </Box>
        )}
      
    </Box>
  );
}
