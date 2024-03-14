import { MetaMaskButton } from "@metamask/sdk-react-ui";

export default function SignIn() {
  return (
    <div className="absolute inset right-0">
      <MetaMaskButton theme={"dark"} color="blue"></MetaMaskButton>
    </div>
  );
}
