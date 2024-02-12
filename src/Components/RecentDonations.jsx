'use client';

import { Badge, Button, Progress, Table } from "flowbite-react";
import Favorite from "./Favorite";





export default function RecentDonations() {
  return (
    <>
    <div className="mt-20">

<h3 className="mb-5">Recent Projects Added</h3>
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Needed</Table.HeadCell>
          <Table.HeadCell>Raised</Table.HeadCell>
          <Table.HeadCell>Details</Table.HeadCell>
          <Table.HeadCell>Favorites</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Savenlugu School Project
            </Table.Cell>
            <Table.Cell><Badge>Education</Badge></Table.Cell>
            <Table.Cell>$50,000</Table.Cell>
            <Table.Cell>$12,000</Table.Cell>
            <Table.Cell><Button>Details</Button></Table.Cell>
            <Table.Cell><Favorite/></Table.Cell>
          </Table.Row>
          
        </Table.Body>
      </Table>
    </div>
    </div>
    </>
  );
}
