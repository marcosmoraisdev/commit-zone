import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  AccountCircle,
  Assignment,
  CheckCircle,
  Create,
} from "@mui/icons-material";

export default function OutlinedCard() {
  return (
    <div className="getting-started-page">
      <Typography variant="h2">
        Welcome to the Smart Contracts-based Commitments System
      </Typography>
      <Typography variant="body1">
        Here's a simple guide to get started:
      </Typography>

      <Typography variant="h2" gutterBottom>
        What is a Smart Contract?
      </Typography>
      <Typography variant="body1">
        Imagine a traditional contract, but instead of being written on paper
        and stored in a drawer, it's coded on a blockchain, a kind of immutable
        and distributed digital ledger. A Smart Contract is a set of code that
        automates the execution and enforcement of agreements without the need
        for intermediaries.
      </Typography>

      <Typography variant="h2" gutterBottom>
        How Does It Work?
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText primary="Contract Creation: First, you and the other party agree on the terms of the contract, such as deadlines, conditions, and values. These terms are then coded into a Smart Contract." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircle />
          </ListItemIcon>
          <ListItemText primary="Automatic Execution: Once the contract is activated on the blockchain, it goes into action automatically, monitoring whether the conditions are met." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircle />
          </ListItemIcon>
          <ListItemText primary="Validation and Enforcement: An automatic validator checks if the contract terms have been fulfilled. If yes, the agreed-upon value is released to the corresponding party. If not, the value remains secure on the blockchain." />
        </ListItem>
      </List>

      <Typography variant="h2" gutterBottom>
        Why Use Smart Contracts?
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <CheckCircle />
          </ListItemIcon>
          <ListItemText primary="Security: Since contracts are automatically executed on the blockchain, there's no room for manipulation or human error." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircle />
          </ListItemIcon>
          <ListItemText primary="Transparency: All contract transactions and conditions are visible and auditable on the blockchain, ensuring transparency for all involved parties." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircle />
          </ListItemIcon>
          <ListItemText primary="Efficiency: Automating contract enforcement saves time and resources, eliminating the need for intermediaries." />
        </ListItem>
      </List>

      <Typography variant="h2" gutterBottom>
        Next Steps:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Register: Create an account on our platform to start creating and signing contracts." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Create />
          </ListItemIcon>
          <ListItemText primary="Create a Contract: Use our simple tools to code the terms of your contract into a Smart Contract." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircle />
          </ListItemIcon>
          <ListItemText primary="Sign and Activate: Sign the contract digitally and activate it on the blockchain to begin monitoring compliance with the terms." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircle />
          </ListItemIcon>
          <ListItemText primary="Monitor and Receive: Track the contract's progress and automatically receive payments when the terms are met." />
        </ListItem>
      </List>
    </div>
  );
}
