import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Alert from "@mui/material/Alert";

export function MuiPage() {
  return (
    <Box sx={{ maxWidth: "56rem", mx: "auto" }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
        Material UI
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
        Components from the MUI library &mdash; mui.com
      </Typography>

      <Stack spacing={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Inputs
            </Typography>
            <Stack spacing={2} direction="row" sx={{ flexWrap: "wrap" }}>
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="text">Text</Button>
              <Button variant="contained" color="secondary">
                Secondary
              </Button>
            </Stack>
            <Box sx={{ mt: 4 }}>
              <TextField label="Name" variant="outlined" size="small" />
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Toggles &amp; Sliders
            </Typography>
            <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
              <Switch defaultChecked />
              <Box sx={{ width: 200 }}>
                <Slider defaultValue={50} />
              </Box>
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Chips &amp; Alerts
            </Typography>
            <Stack spacing={1} direction="row" sx={{ flexWrap: "wrap" }}>
              <Chip label="React" color="primary" />
              <Chip label="MUI" color="secondary" />
              <Chip label="TypeScript" variant="outlined" />
            </Stack>
            <Alert severity="success" sx={{ mt: 3 }}>
              MUI is working correctly!
            </Alert>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}
